import { Col, Row } from 'react-bootstrap';
import CardLogin from '../../components/CardLogin';
import AlertComponent from '../../components/AlertComponent';
import styles from './styles.module.css';

const LoginPage = () => {
    return (
        <Col className={styles.container}>
            <Row className={styles.container__row}>
                <Col xs={12} sm={8} md={4}>
                    <AlertComponent />
                    <CardLogin />
                </Col>
            </Row>
        </Col>
    )
}

export default LoginPage;