import React from 'react'
import { css } from 'glamor'

const styles = css({
  border: '5px solid PaleGreen',
  textAlign: 'center',
  display: 'block',
  width: '10rem',
  padding: '1rem',
  margin: '2rem auto',
  fontSize: '2rem',
})

const Thing = ({ children }) => (
  <div className={styles}>
    {children}
  </div>
)
Thing.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Thing
