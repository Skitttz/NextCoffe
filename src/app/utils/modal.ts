export interface Article{
  data:{
      title:string,
      slug:string,
      content:string,
      createdAt:string,
      updatedAt:string,
      publishedAt:string,
      image: string;
      avatarAuthor: string;
      author:{
        id: number;
        data:{
          attributes:{
            name:string,
            avatar: ImageProps;
          }
        }
      }
  }
}

export interface Event{
  data:{
      name:string,
      id:string,
      content:string,
      createdAt:string,
      updatedAt:string,
      publishedAt:string,
      image: string;
  }
}

export interface ImageProps{
  data:{
    id:number,
    attributes:{
      name:string;
      url:string;
    }
  }[]
}


export interface AvatarAuthorProps {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
}