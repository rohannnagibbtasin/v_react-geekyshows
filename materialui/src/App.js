import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
    return (
        <>
            <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </>
    );
}

export default App;
