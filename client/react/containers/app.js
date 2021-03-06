import App from '../components/app';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkUser } from '../actions/facebook';

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        checkUser
    }, dispatch)
);

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(App)