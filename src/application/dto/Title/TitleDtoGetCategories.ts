import Title from "../../../domain/entities/Title";
import TitleDtoBase from "./TitleDtoBase";

class TitleDtoGetCategories{
    tipo:string
    titles: Title[];
}

export default TitleDtoGetCategories;