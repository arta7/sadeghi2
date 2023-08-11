import React, { Component } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from "react-native-elements";

export default class VideoFile extends Component {
  constructor() {
    super();

    this.state = {
      video: { width: 300, height: 300, duration: 3 },
      thumbnailUrl: undefined,
      videoUrl: undefined,
      currentTime: 3,
      duration: 0,
      isFullScreen: false,
      isLoading: false,
      paused: true,
      playerState: PLAYER_STATES.PAUSED, screenType: 'content',
      currentData:null
    };
  }


  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };


  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };

  onLoad = data => {
    this.setState({ duration: data.duration, isLoading: false,currentData:data })
  }




  onLoadStart = data => this.setState({ isLoading: false });


  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'cover' })
  }



  // onError = () => alert('Oh! ', error);

  render() {
    return (
      <View style={{ width: wp('100%'), height: hp(90), marginVertical: 20 }}>
           <View style={{ flexDirection: 'row', backgroundColor: 'rgba(9,132,226,1)', elevation: 6, height: hp('5%'), width: wp('100%') }}>
                    <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name='arrow-back' color='white' type="materialicon" size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: wp('70%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: wp('3.5%'),
                            width: '100%',
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'right'
                        }}>{this.props.Title}</Text>
                    </View>

                    <View style={{ width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { openDrawer() }}>
                            <Icon name='menu' color='white' />
                        </TouchableOpacity>
                    </View>
            
                </View>
      
        <VideoPlayer
          endWithThumbnail
          thumbnail={this.props.images}
          video={this.props.VideoFile}
          videoWidth={wp(100)}
          videoHeight={hp(80)}
          ref={videoPlayer => (this.videoPlayer = videoPlayer)}
          duration={this.state.duration}
          onEnd={this.onEnd}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          showDuration={true}
          disableFullscreen={false}
          autoplay={true}
        />

        {/* <Video
          onEnd={this.onEnd}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          paused={this.state.paused}
          ref={videoPlayer => (this.videoPlayer = videoPlayer)}
          resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={require('./../VideosFile/1.mp4')}
          style={{ position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
          volume={10}
        />


        <MediaControls
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          mainColor="blue"
          onFullScreen={this.onFullScreen}
          onPaused={this.onPaused}
          onReplay={this.onReplay}
          onSeek={this.onSeek}
          onSeeking={this.onSeeking}
          playerState={this.state.playerState}
          progress={this.state.currentTime}
        /> */}



      </View>
    );
  }
}