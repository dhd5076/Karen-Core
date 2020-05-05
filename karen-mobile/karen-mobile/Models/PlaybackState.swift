//
//  PlaybackState.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/4/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct PlaybackStateContent : Decodable {
    let name: String
    let artist : String
    let image_url : String
    let is_playing : Bool
}

struct PlaybackState : Decodable {
    let content: PlaybackStateContent
}
