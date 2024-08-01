import React from 'react';
import PropTypes from 'prop-types';
import ContactDetailsElement from './ContactDetailsElement';
import styles from './ContactDetails.module.scss';
import Grid from '@/components/shard/Grid';

const ContactDetails = ({ contactDetailsData }) => {
    return (
        <div className={styles.contactDetails}>
            <h4 className={styles.title}>Contact Details</h4>
            <Grid columns={2} rows={2} className={styles.contactDetailsData}>
                {contactDetailsData.map((detail, index) => (
                    <ContactDetailsElement
                        key={index}
                        icon={detail.icon}
                        title={detail.title}
                    >
                        {detail.info &&
                            detail.info.map((infoItem, infoIndex) => (
                                <span
                                    key={infoIndex}
                                    className={styles.infoItem}
                                >
                                    {infoItem}
                                </span>
                            ))}
                        {detail.children}
                    </ContactDetailsElement>
                ))}
            </Grid>
        </div>
    );
};

ContactDetails.propTypes = {
    contactDetailsData: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node.isRequired,
            title: PropTypes.string.isRequired,
            info: PropTypes.arrayOf(PropTypes.string),
            children: PropTypes.node,
        })
    ).isRequired,
};

export default ContactDetails;
