import React,{useRef, useState} from 'react';
import Container from '../components/Container';
import { MainTitleSection, NormalText, ContactForm, InputForm, InputTextarea, SubmitBtn } from '../components/StyledComponents';
import {FiSend} from "react-icons/fi";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [name,setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const MySwal = withReactContent(Swal);
  const form = useRef();
  const handleSubmit = (e)=>{
    const validMailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    e.preventDefault();
    if(name === '' || name.length < 9)
    {
      MySwal.fire({
        title:"Invalid Name",
        icon:"warning"
      })
      return;
    }
    else if(message === '')
    {
      MySwal.fire({
        title:"Write Your Message, Please",
        icon:"warning"
      })
      return;
    }
    else if (!mail.match(validMailRegex))
    {
      MySwal.fire({
        title:"InValid Mail",
        icon:"warning"
      })
      return;
    }
    emailjs.sendForm('service_daosu1t', 'template_4mo3l7f', form.current, 'D9C2u9P1JWK4BYO7A')
    .then((result) => {
        console.log(result.text);
        MySwal.fire({
          title:"Message Sent Successfully",
          icon:"Success"
        });
        setName("");
        setMail("");
        setMessage("");
        return;
    }, (error) => {
        console.log(error.text);
        MySwal.fire({
          title:error.text,
          icon:"error"
        })
        return;
    });
  }
  return (
    <motion.div 
      className="contact" 
      initial={{x:'-100%', opacity:'0'}}
      animate={{x:'0', opacity:'1'}}
      exit={{x:'-100%', opacity:'0'}}
      transition={{duration:'.5'}}
    >
        <Container className="flex-column" >
          <MainTitleSection
            as={motion.h1}
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:'.5', delay:'.5', type:"spring", stiffness:120}}
          >
            Contact
          </MainTitleSection>
          <NormalText style={{textAlign:'center',margin:'20px 0 0', lineHeight:'30px', color:'#757575'}}>
            Feel free to Contact me by submitting the form below
          </NormalText>
          <ContactForm className="contact-form" ref={form} onSubmit={handleSubmit}>
            <InputForm type="text" placeholder='Enter Your Name' name="guest_name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <InputForm type="text" placeholder='Enter Your E-Mail' name="guest_email" value={mail} onChange={(e)=> setMail(e.target.value)}/>
            <InputTextarea placeholder='Enter Your Message ' rows="3" name="guest_message" value={message} onChange={(e)=> setMessage(e.target.value)}></InputTextarea>
            <SubmitBtn type="submit">
              <div className="btn-content">
                <p >Send</p>
                <p style={{fontSize:'20px'}} ><FiSend/></p>
              </div>
            </SubmitBtn>
          </ContactForm>
        </Container>  
    </motion.div>

  )
}

export default Contact