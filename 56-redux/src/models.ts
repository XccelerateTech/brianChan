export  interface IRootState {
    links: Array<{
      id: number,
      title: string,
      url: string
    }>
    users:Array<{
      id:string,
      name:string
    }>
  }