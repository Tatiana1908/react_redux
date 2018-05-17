import { connect } from 'react-redux';
import { addItem } from '../actions/index';

import Form from '../components/form/form';

const mapDispatchToProps = {
    addItem,
};

export default connect(null, mapDispatchToProps)(Form);