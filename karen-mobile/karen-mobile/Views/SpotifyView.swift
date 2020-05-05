//
//  SpotifyView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 4/18/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI
import URLImage

struct SpotifyView: View {
    let timer = Timer.publish(every: 5, on: .main, in: .common).autoconnect()
    @State public var mainImageURL = "https://via.placeholder.com/200"
    @State public var songTitle = "Song Title"
    @State public var artistName = "Artist Name"
    
    var body: some View {
        VStack(spacing: 0) {
            VStack {
                URLImage(URL(string: mainImageURL)!) { proxy in
                proxy.image
                    .resizable()
                    .clipped()
                }
                .frame(width: 330.0, height: 330.0)
            }
            .onReceive(timer) { input in
                self.updatePlaybackState()
            }
            VStack(alignment: .leading) {
                Text(songTitle)
                    .font(.title)
                    .frame(maxWidth: .infinity, alignment: .leading)
                Text(artistName)
                    .font(.subheadline)
                    .frame(maxWidth: .infinity, alignment: .leading)
            }
            .padding(24)
            .frame(maxWidth: .infinity)
            HStack(spacing: 100) {
                Button(action: {
                    self.previousSong()
                }) {
                    Image(systemName: "backward.end.fill")
                }
                .foregroundColor(.black)
                Button(action: {
                    self.toggleMusicPlaying()
                }) {
                    Image(systemName: "play.circle.fill")
                    .resizable()
                        .frame(maxWidth: 64, maxHeight: 64)
                }
                .foregroundColor(.black)
                Button(action: {
                    self.nextSong()
                }) {
                    Image(systemName: "forward.end.fill")
                }
                .foregroundColor(.black)
            }
        }
    }
    
    func toggleMusicPlaying() {
        print("Toggled Music Playing")
    }

    func previousSong() {
        let url = URL(string: "http:192.168.1.145/api/spotify/skipBackward")!
        var request = URLRequest(url: url)
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpMethod = "POST"
        
        URLSession.shared.dataTask(with: request) { data, response, error in
        }.resume()
        updatePlaybackState()
    }

    func nextSong() {
        let url = URL(string: "http:192.168.1.145/api/spotify/skipForward")!
        var request = URLRequest(url: url)
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpMethod = "POST"
        
        URLSession.shared.dataTask(with: request) { data, response, error in
        }.resume()
    }
    
    func updatePlaybackState() {
        let url = URL(string: "http:192.168.1.145/api/spotify/getPlaybackState")!
        var request = URLRequest(url: url)
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpMethod = "GET"
        
        URLSession.shared.dataTask(with: request) { data, response, error in
            if let data = data {
                if let playbackState = try?
                    JSONDecoder().decode(PlaybackState.self, from: data) {
                    DispatchQueue.main.async {
                        self.songTitle = playbackState.content.name
                        self.artistName = playbackState.content.artist
                        self.mainImageURL = playbackState.content.image_url
                    }
                    return
                }
            }
        }.resume()
    }
}

struct SpotifyView_Previews: PreviewProvider {
    static var previews: some View {
        SpotifyView()
    }
}
