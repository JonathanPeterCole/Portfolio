import React from 'react'
import PropTypes from 'prop-types'
import { Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const DetailsPageManager = props => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={props.location.pathname}
        classNames='animation'
        timeout={{ enter: 1200, exit: 300 }}
        unmountOnExit>
        <Switch location={props.location}>
          {props.children}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

DetailsPageManager.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node
}

export default withRouter(DetailsPageManager)
