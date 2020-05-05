//
//  ImageLoader.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/4/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI
import Combine
import Foundation

extension UIImageView {
    func load(url: URL) {
        DispatchQueue.global().async() {[weak self] in
            if let data = try? Data(contentsOf: url) {
                if let image = UIImage(data: data) {
                    DispatchQueue.main.async {
                        self?.image = image
                    }
                }
            }
        }
    }
}
