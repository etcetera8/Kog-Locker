import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const codedPath = "_xpqF`hgaS\QHDFJCNSb@Ul@Q`AY|BA\Dl@Rt@PdA@f@E\IRKJuAr@UXSr@SpAYr@U\o@r@yAdAw@p@gAlAS^Kb@An@Jx@Nz@?h@SVIBa@EcBy@g@Oq@Ac@Je@^S`@G^?v@Bj@R`B@ZKZKB[C{@g@a@Oa@I]A]Bk@R_@\{@nAYXSNa@LaACWHGDU\Mj@EvAKd@[`@UDcC@_@Dk@PUNOPIN]hAm@xAEN@~@NxAHb@P^x@hAXv@XdBNnAB|@Eh@]bBI~@CvAO|B?HJ^H@Z[p@iEb@gBFg@D}ABERAHV@n@Ct@GvAOnB@LPVJ?RODYHwAh@wCDq@@g@C_AQu@eAcBQi@Gg@@oAFe@HUVWXGn@Bl@@XIbAo@VIZAn@Db@EZQnAiA\SRGZC`@@ZFzAXh@PPNZd@^^\NnA^XFZ@\OJKz@_B`@WPAJ@NDx@t@|Af@`@`@Vp@FTnA|GRp@Xh@pAlAX`@ZZRFV@^El@QTCJ@\JdAz@`@`@V^x@tA\r@xApDX^LHLBJ?VGPM`AeAf@e@p@e@d@Sd@?pANfDVpAArAI\?JL@LEHKJYDm@Ec@BM`@JPVHr@A`@BDF@PEJSJq@Ae@I]CwBFoBPWFW`@?LHPVLT?fAM`@@d@LzAz@VFZBn@Cr@Un@_@hBoBZ_@Rk@Jo@L{BLs@HWLSn@e@LMHg@Si@u@s@i@]uAo@]WK]IiBWgBDe@Z{@?g@GKSQm@S_Ag@cBc@U[C_@H{AHe@N]jCoDh@m@POVKTGt@Ah@Br@JPFHHXf@DRBPAr@ShCCp@@h@"
export default class MapCard extends Component {

  async componentDidUpdate() {
    await this.loadMap();
  }

  async loadMap () {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      console.log(maps);
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

    const mapConfig = new google.maps.Map(node, {
      zoom: 11,
      center: {lat: 39.7392, lng: -104.9903},
      mapTypeId: 'terrain'
    })

      let thing = await google.maps.geometry.encoding.decodePath(codedPath)
      console.log(thing);
      
      const polyline = new google.maps.Polygon({
        paths: [{lat: 39.7392, lng: -104.9903}, {lat:40, lng: -105}],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0
    })
    console.log(polyline);
    polyline.setMap(mapConfig)
    this.map = new maps.Map(node, mapConfig)
    }
  }

  render() {
    const style = {
      width: '200px',
      height: '200px',
    }

    return (
   
        <section className='map card' ref='map' style={style}>
        </section>
      
    )
  }
};

