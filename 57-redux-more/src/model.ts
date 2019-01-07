export  interface IRootState {
    links: Array<{
      title: string,
      url: string
    }>
    users:Array<{
      id:string,
      name:string
    }>
  }