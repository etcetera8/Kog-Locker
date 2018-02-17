import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MapCard.css'
const codedPath = "_xpqF`hgaS\QHDFJCNSb@Ul@Q`AY|BA\Dl@Rt@PdA@f@E\IRKJuAr@UXSr@SpAYr@U\o@r@yAdAw@p@gAlAS^Kb@An@Jx@Nz@?h@SVIBa@EcBy@g@Oq@Ac@Je@^S`@G^?v@Bj@R`B@ZKZKB[C{@g@a@Oa@I]A]Bk@R_@\{@nAYXSNa@LaACWHGDU\Mj@EvAKd@[`@UDcC@_@Dk@PUNOPIN]hAm@xAEN@~@NxAHb@P^x@hAXv@XdBNnAB|@Eh@]bBI~@CvAO|B?HJ^H@Z[p@iEb@gBFg@D}ABERAHV@n@Ct@GvAOnB@LPVJ?RODYHwAh@wCDq@@g@C_AQu@eAcBQi@Gg@@oAFe@HUVWXGn@Bl@@XIbAo@VIZAn@Db@EZQnAiA\SRGZC`@@ZFzAXh@PPNZd@^^\NnA^XFZ@\OJKz@_B`@WPAJ@NDx@t@|Af@`@`@Vp@FTnA|GRp@Xh@pAlAX`@ZZRFV@^El@QTCJ@\JdAz@`@`@V^x@tA\r@xApDX^LHLBJ?VGPM`AeAf@e@p@e@d@Sd@?pANfDVpAArAI\?JL@LEHKJYDm@Ec@BM`@JPVHr@A`@BDF@PEJSJq@Ae@I]CwBFoBPWFW`@?LHPVLT?fAM`@@d@LzAz@VFZBn@Cr@Un@_@hBoBZ_@Rk@Jo@L{BLs@HWLSn@e@LMHg@Si@u@s@i@]uAo@]WK]IiBWgBDe@Z{@?g@GKSQm@S_Ag@cBc@U[C_@H{AHe@N]jCoDh@m@POVKTGt@Ah@Br@JPFHHXf@DRBPAr@ShCCp@@h@"
export default class MapCard extends Component {

  async componentDidUpdate() {
    await this.loadMap();
  }

  async loadMap (polyline, latLong) {
    if (this.props && this.props.google.maps.geometry.encoding) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

    const mapConfig = new google.maps.Map(node, {
      zoom: 12,
      center: {lat: 39.7316, lng: -105.239256},
      mapTypeId: 'terrain'
    })

    const decodedSets = google.maps.geometry.encoding.decodePath(codedPath)
    const array = decodedSets.map(coord => JSON.stringify(coord))

    const parsedArray = array.map(coord => JSON.parse(coord))
    console.log(parsedArray);
      
    const polyline = await new google.maps.Polyline({
      path: parsedArray,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0
    })
    polyline.setPath(decodedSets)
    polyline.setMap(mapConfig)
    this.map = await new maps.Map(node, mapConfig)
    }
  }

  render() {
    const {name, athlete_segment_stats} = this.props.userTarget
    console.log(this.props.userTarget, athlete_segment_stats);
    
    const style = {
      width: '200px',
      height: '200px',
    }

    return (
        <section className='card map-card'>
          {
            athlete_segment_stats && 
            <div>
              <h3 className="target-name">{name}</h3>
            
              <div id="map" className='map' ref='map' style={style}>
              </div>
              <span>Best Time: {(athlete_segment_stats.pr_elapsed_time / 60)} minutes</span>
            </div>
          }
        </section>
      
    )
  }
};

