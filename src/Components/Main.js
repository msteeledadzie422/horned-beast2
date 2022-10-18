import { Component } from 'react'
import HornedBeast from './HornedBeast'

class Main extends Component {
    render() {
        return (
            <main>
                <HornedBeast title="Colorado Pronghorn" imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Antilocapra_americana.jpg/440px-Antilocapra_americana.jpg" description="Colorado Pronghorn!" />
                <HornedBeast title="Colorado Bighorn Sheep" imgURL="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/BighornSheep_ownby1.jpg" description="Looks like a ram, but is actually a Colorado Bighorn Sheep!" />
            </main>
        )
    }
}

export default Main;