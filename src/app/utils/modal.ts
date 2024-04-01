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
      id:number,
      description:string,
      initialDate:string,
      image: string;
      endDate:string,
      singlePrice:number,
      sharedPrice:number,
      isPrincipalEventMenu:boolean,
      createdAt:string,
      updatedAt:string,
      publishedAt:string,
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