import Image from "next/image";
import cover from "public/images/cover-image.jpg";

const ProfileCover = () => {
  return (
    <div className="h-60 w-full">
      <Image
        src={cover}
        alt="cover"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ProfileCover;
