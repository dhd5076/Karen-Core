//
//  ViewController.swift
//  Karen
//
//  Created by Dylan Dunn on 4/8/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import Cocoa

class MainView: NSViewController {
    var pingURL = URL(string: "https://localhost/api/ping?who=Karen%20Desktop")!
    @IBOutlet weak var statusLabel: NSTextField!
    @IBOutlet weak var statusLight: NSImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        Timer.scheduledTimer(timeInterval: 10, target: self, selector: #selector(updateConnectionStatus), userInfo: nil, repeats: true)
    }
    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }
    
    @objc func updateConnectionStatus() {
        let task = URLSession.shared.dataTask(with: pingURL) { (data, response, error) in
            if error != nil {
                self.updateConnectionLabel(message: "Not Connected", statusImage: "NSStatusUnavailable")
            } else {
                self.updateConnectionLabel(message: "Connected", statusImage:
                "NSStatusAvailable")
            }
        }
        task.resume()
    }
    
    func updateConnectionLabel(message: String, statusImage: String) {
        DispatchQueue.main.async {
            self.statusLabel.stringValue = message
            self.statusLight.image = NSImage(named: statusImage)
        }
    }
}

