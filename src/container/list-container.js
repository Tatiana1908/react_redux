import { connect } from 'react-redux'
import ListItem from '../components/list/to-do-list'
import { removeItem, checkItem, editItem} from '../actions/index';
const mapStateToProps = state => ({
    items: state.items,
});
const mapDispatchToProps = {
    removeItem,
    checkItem,
    editItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)