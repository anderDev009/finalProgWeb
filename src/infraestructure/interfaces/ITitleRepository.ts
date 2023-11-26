import IBaseRepository from "../Core/IBaseRepository";

interface ITitleRepository<Title> extends IBaseRepository<Title> {
    GetCategories(): Promise<Title[]>;
}

export default ITitleRepository;