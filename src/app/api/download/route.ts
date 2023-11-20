import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

export const revalidate = 0;

const awsConfig = {
  region: process.env.MY_AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.MY_AWS_SECRET_KEY as string,
  },
};

const s3 = new S3Client(awsConfig);

export async function GET() {
  try {
    const getCommand: GetObjectCommand = new GetObjectCommand({
      Bucket: process.env.MY_AWS_BUCKET_NAME,
      Key: "john-schlesinger-resume-2023.pdf",
    });

    const data = await s3.send(getCommand);

    if (data.Body) {
      return new Response(data.Body.transformToWebStream(), {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition":
            "attachment; filename=john-schlesinger-resume-2023.pdf",
        },
        status: 200,
        statusText: "OK",
      });
    } else {
      return new Response("Something went wrong!", { status: 500 }).json();
    }
  } catch (e: any) {
    return new Response(`Something went wrong! ${e?.message}`, {
      status: 500,
    }).json();
  }
}
