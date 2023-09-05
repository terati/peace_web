import * as React from 'react';
import Image from 'next/image';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './Contact.module.scss';
import { Spinner } from './spinner';
import { truncate } from 'fs';


function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    charCnt: '0',
    phoneNumber: '',
  });
  const [formSubmitStatus, setFormSubmitStatus] = React.useState<{formSubmitted: Boolean, loading: boolean, error: boolean}>({
    formSubmitted: false,
    loading: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const txtAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      charCnt: ''+e.target.value.length,
      message: e.target.value,
    });
  } 
  const intl = useIntl();
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setFormSubmitStatus({
      formSubmitted: true,
      loading: true,
      error: false
    });
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData)
      }).then((res) => {
        if (res.ok) {  
          setFormSubmitStatus({
            formSubmitted: true,
            loading: false,
            error: false
          });
        } else {
          setFormSubmitStatus({
            formSubmitted: true,
            loading: false,
            error: true
          });
        }
      })
    } catch {
      setFormSubmitStatus({
        ...formSubmitStatus,
        loading: false,
        error: true
      })
    }
  };
  return (
    <>
      <div className={styles.contact_wrapper}>
        <h1 className={styles.contact_title}> <FormattedMessage id="contact.title.h1" /> </h1>
        <div className={styles.contact}>
          <div className={styles.image_background}>
            <h1> <FormattedMessage id="contact.title.h1" /> </h1>
            <Image className={styles.gradient_background} 
              draggable={false}
              src={"/gradient1.jpg"} 
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={"/gradient1.jpg"} 
              objectPosition={"50% 50%"}  
            />
          </div>
          <div className={styles.contact_side}>
            { formSubmitStatus.formSubmitted && <div className={styles.form_status}> 
              { formSubmitStatus.loading && <div>
                  <Spinner />
                  <p> <FormattedMessage id="contact.submitting" /> </p>
                </div> }
              { !formSubmitStatus.loading && !formSubmitStatus.error && <div>
                  <img src={"/success.jpg"} height={150}/>
                  <h2> <FormattedMessage id="contact.successMsg" /> </h2>  
                </div> }
              { !formSubmitStatus.loading && formSubmitStatus.error && <div>
                <img src={"/failure.jpg"} height={150}/>
                  <h2> <FormattedMessage id="contact.failureMsg" /> </h2>
                </div> }
            </div> }

            { !formSubmitStatus.formSubmitted &&<form className={styles.contact_form} onSubmit={handleSubmit}>
              <div className={styles.name_group}>
                <div className={styles.form_group}>
                  <label htmlFor="firstName"><FormattedMessage id="contact.firstName" /> <span className={styles.asterisk}>*</span></label>
                  <input 
                    id="firstName"
                    name='firstName'
                    autoComplete='given-name'
                    placeholder={intl.formatMessage({id: 'contact.firstName'})}
                    value={formData.firstName}
                    className={styles.first_group} 
                    onChange={handleChange}
                    required
                  /> 
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="lastName"><FormattedMessage id="contact.lastName" /> <span className={styles.asterisk}>*</span></label>
                  <input 
                    id="lastName"
                    name='lastName'
                    autoComplete='family-name'
                    placeholder={intl.formatMessage({id: 'contact.lastName'})}
                    value={formData.lastName}
                    className={styles.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="email"><FormattedMessage id="contact.email" /> <span className={styles.asterisk}>*</span></label>
                <input 
                  id="email"
                  name='email'
                  autoComplete='email'
                  placeholder={intl.formatMessage({id: 'contact.email'})}
                  value={formData.email}
                  className={styles.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.form_group}>
                <label htmlFor="phone"><FormattedMessage id="contact.phone" /> </label>
                <input 
                  id="phone"
                  name='phoneNumber'
                  autoComplete='tel'
                  placeholder={intl.formatMessage({id: 'contact.phone'})}
                  value={formData.phoneNumber}
                  pattern="[0-1]{10}"
                  onChange={handleChange}
                />
              </div>

              
              <div className={styles.form_group}>
                <label htmlFor="message"><FormattedMessage id="contact.message" /> <span className={styles.asterisk}>*</span></label>
                <textarea
                  className={styles.message}
                  name='message'
                  id="message"
                  placeholder={intl.formatMessage({id: 'contact.message'})}
                  value={formData.message}
                  onChange={(e) => txtAreaChange(e)}
                  rows={8}
                  maxLength={1000}
                  // title={}
                  required
                />
                <div className={styles.numChars}> {formData.charCnt} /1000 <FormattedMessage id="contact.chars" /></div>
              </div>

              <button type={'submit'} className={styles.submit}> <FormattedMessage id="contact.submit"/> </button>    
            </form> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;