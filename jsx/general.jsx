$._PPP_={
    
    exportFileNames : function() {
        var project = app.project;
        var allSequences = project.sequences;
        
        if (allSequences == null || allSequences.numSequences == 0) {
            alert("No sequences found");
            return "";
            }

        var videoStr = "<u>Video</u><br><br>";
        var audioStr = "<u>Music</u><br><br>";
        var allMedia = new Array();
		
		var myIndexOf = function (arr, el) {  
			for(var i = 0; i < arr.length; i++) if(el === arr[i]) return i;  
				return -1;  
		}  
		
		
		var count = 0;
		var idx = 0;
        //for (var i = 0; i < allSequences.numSequences; i++){
		while (count < allSequences.numSequences) {
			if (allSequences[idx] != null && allSequences[idx].videoTracks != null && allSequences[idx].audioTracks != null) {
			count++;
            for (var j = 0; j < allSequences[idx].videoTracks.numTracks; j++) {
                var vidTrack = allSequences[idx].videoTracks[j];
				if (vidTrack == null) continue;
                var vids = vidTrack.clips;
				if (vids == null) continue;
                for (var k = 0; k < vids.numItems; k++) {
					if (vids[k] != null) {
					if (myIndexOf(allMedia, vids[k].projectItem.name) == -1) {
                    //if (allMedia.indexOf(vids[k].projectItem.name) == -1) {
                        var vidName = vids[k].projectItem.name;
						if (vidName.indexOf(".") != -1) {
                        videoStr += vidName.substring(0, vidName.lastIndexOf('.')) + "<br>";
                        allMedia.push(vids[k].projectItem.name.toString());
						}
                    }
					}
                }
        
            }
    
            for (var j = 0; j < allSequences[idx].audioTracks.numTracks; j++) {
                var track = allSequences[idx].audioTracks[j];
				if (track == null) continue;
                var trackSongs = track.clips;
				if (trackSongs == null) continue;

                for (var k = 0; k < trackSongs.numItems; k++) {
                    //if (allMedia.indexOf(trackSongs[k].projectItem.name) == -1) {
					if (trackSongs[k] != null) {

					if (myIndexOf(allMedia, trackSongs[k].projectItem.name) == -1) {
                        var songName = trackSongs[k].projectItem.name;
						if (songName.indexOf(".") != -1) {
                        audioStr += songName.substring(0, songName.lastIndexOf('.')) + "<br>";
                        allMedia.push(trackSongs[k].projectItem.name.toString());
						}
                    }
					}
                }
            
            }
			}
			idx++;
        }

        var result = videoStr + "<br>" + audioStr;
        return result;
        
    }
};