import '../App.css'
import wrench from '../dino-parks-wrench.png'
import PropTypes from 'prop-types'
// Custom HTML element called GridItem which determines the look of the location grids
const GridItem = ({needMaintenance, safe, gridLabel}) => {
    
    // Function retrieves data from the server 
    const getData = async() => {
        const res = await fetch('https://dinoparks.net/nudls/feed')
        const data = await res.json()
        
        // Can uncomment to see that data is retrieved
        //console.log(data)
        
        return data
    }
    
    const dataBlocks = getData() // Stores the data as an array of objects
    
    // Determining whether the location is safe 
    // You can change the safe prop to see what happens when the location is safe/unsafe/other
    let nameClass = 'Grid-item-other'
    if (safe === 'SAFE'){
        nameClass = 'Grid-item-safe'
    }
    else if (safe === 'UNSAFE'){
        nameClass = 'Grid-item-unsafe'
    }
    // Defaults to other if the grid has a label
    if (gridLabel !== ''){
        nameClass = 'Grid-item-other'
    }
    return(
        <div className={nameClass}>
            {needMaintenance === true && gridLabel === '' && (<img className='Wrench' src={wrench} alt= "Wrench" />) /*Controls the look of the location block*/}
            {gridLabel !== '' && (<p className='Grid-label' >{gridLabel}</p>) /*Displays labels for the grid*/}
        </div>
    )
}

GridItem.defaultProps = {
    // Default props if they are not given
    needMaintenance: false,
    safe: 'OTHER',
    gridLabel: ''
}

GridItem.propTypes = {
    // Prop types
    needMaintenance: PropTypes.bool.isRequired,
    safe: PropTypes.string.isRequired,
    gridLabel: PropTypes.string.isRequired
}

export default GridItem;