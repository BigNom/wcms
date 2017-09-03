import React, { Component } from 'react';
import NamesList from './components/NamesList'
import Search from './components/Search'
import ShortList from './components/ShortList'
import createMuiTheme from 'material-ui/styles/theme';
import { MuiThemeProvider } from 'material-ui/styles';

import MaterialNav from '../../components/Navbar/MaterialNav'

const theme = createMuiTheme();

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      favourites: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  addFavourite(id) {
    const favlist = this.state.favourites.concat([id])
    this.setState({
      favourites: favlist
    });
  }

  deleteFavourite(id) {
    const { favourites } = this.state
    const newList = [
      ...favourites.slice(0, id),
      ...favourites.slice(id + 1)
    ]
    this.setState({ favroutes: newList
    })
  }
  render() {
    const hasSearch = this.state.filterText.length > 0
    return (
      <MuiThemeProvider>
        <div>
          <MaterialNav />
          <header>
            <Search
              filterVal={this.state.filterText}
              filterUpdate={this.filterUpdate.bind(this)}
            />
          </header>
          <main>
            <ShortList
              favourites={this.state.favourites}
              data={this.props.data}
              deleteFavourite={this.deleteFavourite.bind(this)}
            />

            <NamesList
              data={this.props.data}
              filter={this.state.filterText}
              favourites={this.state.favourites}
              addFavourite={this.addFavourite.bind(this)}
            />
            {hasSearch &&
              <button onClick={this.filterUpdate.bind(this, '')}>
                Clear Search
            </button>
            }
          </main>

        </div>
        
      </MuiThemeProvider>

    );
  }
}

export default Page;