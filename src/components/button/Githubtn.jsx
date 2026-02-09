import React from 'react';
import { FiGithub } from 'react-icons/fi';
import SocialButton from './SocialButton';
import { socialLinks } from '../../constants';

const Githubtn = () => {
  const github = socialLinks.find(link => link.id === 'github');

  return (
    <SocialButton
      icon={FiGithub}
      label="Github"
      href={github.href}
      isExternal={true}
    />
  );
};

export default Githubtn;