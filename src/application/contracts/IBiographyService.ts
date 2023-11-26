import IBaseService from "../core/IBaseService";
import BiographyDtoAdd from "../dto/Author/Biography/BiographyDtoAdd";
import BiographyDtoRemove from "../dto/Author/Biography/BiographyDtoRemove";
import BiographyDtoUpdate from "../dto/Author/Biography/BiographyDtoUpdate";

interface IBiographyService extends IBaseService<
                                        BiographyDtoAdd,
                                        BiographyDtoRemove,
                                        BiographyDtoUpdate>{

}

export default IBiographyService