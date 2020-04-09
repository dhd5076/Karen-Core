//
//  FirstViewController.swift
//  Mobile
//
//  Created by Dylan Dunn on 4/8/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import UIKit
import CoreLocation

class FirstViewController: UIViewController, CLLocationManagerDelegate {
    var locationManager: CLLocationManager!

    override func viewDidLoad() {
        super.viewDidLoad()
        if (CLLocationManager.locationServicesEnabled())
        {
            locationManager = CLLocationManager()
            locationManager.delegate = self
            locationManager.desiredAccuracy = kCLLocationAccuracyBest
            locationManager.requestAlwaysAuthorization()
            locationManager.requestWhenInUseAuthorization()
            locationManager.startUpdatingLocation()
        }
    }
    
    func locationManager(_: CLLocationManager, didUpdateLocations locations: [CLLocation])
    {
        let location = locations.last! as CLLocation

        let center = CLLocationCoordinate2D(latitude: location.coordinate.latitude, longitude: location.coordinate.longitude)
        
        let task = URLSession.shared.dataTask(with: URL(string: "http://192.168.1.145/api/logging/gps/logCords?latitude=" + String(center.latitude) + "&longitude=" + String(center.longitude))!)
        task.resume()
    }


}

