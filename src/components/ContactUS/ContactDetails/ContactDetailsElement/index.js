import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ContactDetailsElement.module.scss';
import Icon from '@/components/shard/Icon';

const ContactDetailsElement = ({ icon, title, children }) => {
    return (
        <div className={styles.contactDetailsElement}>
            <Icon name={icon} size={25} />
            <div className={styles.detailsWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.infoList}>
                    {children}
                </div>
            </div>
        </div>
    );
};

ContactDetailsElement.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default ContactDetailsElement;
