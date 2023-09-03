'use client';
import { useEffect } from 'react';
import styles from '../styles/Component.module.css';
const ClientRenderingComponent = () => {
    useEffect(() => {console.log(window.document.activeElement)}, []);
    return <p className={styles.paragraph}>Hello</p>
}
export default ClientRenderingComponent;