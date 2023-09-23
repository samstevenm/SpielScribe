document.getElementById("fetch").addEventListener("click", function() {
  chrome.scripting.executeScript({
    code: 'ytplayer.config.args.raw_player_response.captions.playerCaptionsTracklistRenderer.captionTracks[0].baseUrl'
  }, function(results) {
    if (chrome.runtime.lastError || !results || !results.length) {
      document.getElementById("transcript").textContent = "Failed to fetch transcript.";
      return;
    }
    // Fetch and display the transcript
    fetch(results[0])
      .then(response => response.text())
      .then(data => {
        document.getElementById("transcript").textContent = data;
      });
  });
});
