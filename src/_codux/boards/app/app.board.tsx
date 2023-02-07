import { createBoard } from '@wixc3/react-board';
import { App } from '../../../app';

export default createBoard({
    name: 'App1',
    Board: () => <App />,
});
