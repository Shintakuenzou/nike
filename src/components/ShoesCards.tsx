interface ShoesCardsProps {
  imgUrl: {
    bigShoe: string;
    thumbnail: string;
  };
  changeBigShoesImage: (value: string) => void;
  bigShoesImage: string;
}

export function ShoesCards({ imgUrl, changeBigShoesImage, bigShoesImage }: ShoesCardsProps) {
  function handleClick() {
    if (bigShoesImage !== imgUrl.bigShoe) {
      changeBigShoesImage(imgUrl.bigShoe);
    }
  }
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoesImage === imgUrl.bigShoe ? "border-cyan-500" : "border-transparent "
      }   cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card  bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoes thumbnail"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
}
