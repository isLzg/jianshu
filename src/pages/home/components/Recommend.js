import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <div>
        <RecommendWrapper>
          {
            list.map((item) => {
              return (
                <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
              )
            })
          }
        </RecommendWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})


export default connect(mapStateToProps, null)(Recommend)