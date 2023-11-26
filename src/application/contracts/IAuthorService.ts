import IBaseService from "../core/IBaseService";
import AuthorDtoAdd from "../dto/Author/AuthorDtoAdd";
import AuthorDtoRemove from "../dto/Author/AuthorDtoRemove";
import AuthorDtoUpdate from "../dto/Author/AuthorDtoUpdate";

interface IAuthorService extends IBaseService<AuthorDtoAdd, AuthorDtoRemove, AuthorDtoUpdate> {

}


export default IAuthorService;