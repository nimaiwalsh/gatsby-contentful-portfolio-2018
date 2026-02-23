import React from 'react'
import styled from '@emotion/styled'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

const SocialMediaShare = ({ content, link }) => {
  return (
    <SocialContainer>
      <TwitterShareButton title={content} url={link}>
        <TwitterIcon round size={40} />
      </TwitterShareButton>
      <FacebookShareButton url={link}>
        <FacebookIcon round size={40} />
      </FacebookShareButton>
    </SocialContainer>
  )
}

export default SocialMediaShare

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;

  & .SocialMediaShareButton {
    outline: none;
    cursor: pointer;
  }

`

