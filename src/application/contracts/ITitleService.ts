import IBaseService from "../core/IBaseService";
import ServiceResult from "../core/ServiceResult";
import TitleDtoAdd from "../dto/Title/TitleDtoAdd";
import TitleDtoRemove from "../dto/Title/TitleDtoRemove";
import TitleDtoUpdate from "../dto/Title/TitleDtoUpdate";

interface ITitleService extends IBaseService<TitleDtoAdd, TitleDtoRemove, TitleDtoUpdate> {
    GetCategories(): Promise<ServiceResult>
}

export default ITitleService;