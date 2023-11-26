import ServiceResult from "./ServiceResult";

interface IBaseService<DtoAdd, DtoRemove, DtoUpdate> {
    GetAll(): Promise<ServiceResult>;
    GetById(id: string): Promise<ServiceResult>;
    Remove(dtoRemove: DtoRemove): Promise<ServiceResult>;
    Update(dtoUpdate: DtoUpdate): Promise<ServiceResult>;
    Add(dtoAdd: DtoAdd): Promise<ServiceResult>;
}

export default IBaseService;