import { DataSource, DataSourceOptions } from "typeorm";

class LibraryContext extends DataSource {
    constructor(options: DataSourceOptions) {
        super(options);
    }
}

export default LibraryContext;

