import React from 'react'
import { BackgroundImg, DirectoryItemContainer, Body } from "./directoryItem.styles"
import { useNavigate } from 'react-router-dom'

function DirectoryItem({ category }) {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(category.route)
  return (  
          <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImg imageUrl={category.imageUrl} />
            <Body>
              <h2>{category.title}</h2>
              <p>Shop now</p>
            </Body>
          </DirectoryItemContainer>
        )
}

export default DirectoryItem