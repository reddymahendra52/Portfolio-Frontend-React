import React from 'react';
import { BsTwitter,   BsGithub } from 'react-icons/bs';
import { SiLinktree } from "react-icons/si";


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://linktr.ee/reddymahendra52" target="_blank">
        <SiLinktree />
      </a>
    </div>
    <div>
      <a href="https://github.com/reddymahendra52" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/Mahendr39780629" target="_blank" >
        <BsTwitter />
      </a>  
    </div>
  </div>
);

export default SocialMedia;