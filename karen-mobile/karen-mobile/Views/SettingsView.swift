//
//  SettingsView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 4/19/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI
import HealthKit
import HealthKitUI

struct SettingsView: View {
    var body: some View {
        VStack {
            Button(action: requestHealthKitAccess) {
                Text("Request HealthKit Access")
            }
        }
    }
}

func requestHealthKitAccess() {
    if HKHealthStore.isHealthDataAvailable() {
        let healthStore = HKHealthStore()
        let readDataTypes : Set = [HKObjectType.quantityType(forIdentifier: HKQuantityTypeIdentifier.stepCount)!]
        
        healthStore.requestAuthorization(toShare: nil, read: readDataTypes) { (success, error) in
            if !success {
                // Handle the error here.
            } else {
                print("We're good")
            }
        }
    }
}

struct SettingsView_Previews: PreviewProvider {
    static var previews: some View {
        SettingsView()
    }
}
