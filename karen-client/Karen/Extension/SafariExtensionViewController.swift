//
//  SafariExtensionViewController.swift
//  Extension
//
//  Created by Dylan Dunn on 4/8/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
