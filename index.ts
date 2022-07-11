import {Reader} from './src/Reader';
import {Writer} from './src/Writer';

type ActionType = 'canonicalize' | 'decanonicalize';
type FormatType = 'STRATEDI';
type FileType = 'ORDER' | 'INVOICE' | 'DEASDV';

exports.handler = async (event: { action: ActionType, format: FormatType, fileType: FileType, file: string}) => {
    const {action, format, fileType, file} = event;

    if(action === 'canonicalize') {
        const reader = new Reader();
        return reader.read(format, fileType, file);
    } else if(action === 'decanonicalize') {
        const writer = new Writer();
        return writer.write(format, fileType, file);
    }
};