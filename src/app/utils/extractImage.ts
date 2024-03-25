import { BASE_URL_MEDIA } from "./api";

type TypeImageData = {
  image:{
    data?: {
      attributes:{
        url: string;
      }
    }
  }
}

export function extractImageUrl(imageData : TypeImageData){
  return BASE_URL_MEDIA + imageData.image.data?.attributes.url;
}