interface IService<T> {
  create(obj:unknown):Promise<T>,
  readOne(_id:string):Promise<T>,
  read():Promise<T[]>,
  destroy(_id:string):Promise<T>,
  update(__id:string, obj: unknown):Promise<T>,
}

export default IService;
