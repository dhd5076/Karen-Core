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
import URLImage

struct SettingsView: View {
    var body: some View {
        NavigationView {
            VStack {
                List {
                    HStack(spacing: 12) {
                        URLImage(URL(string: "https://via.placeholder.com/64")!)
                            .clipShape(Circle())
                            .frame(width: 64, height: 64)
                        NavigationLink(destination: BankingView()) {
                            VStack(alignment: .leading) {
                                Text("Dylan Dunn")
                                    .font(.title)
                                Text("Owner")
                                    .font(.subheadline)
                            }
                        }
                        
                    }
                    Section(header: Text("Music")) {
                        Button("Connect Spotify") {
                            connectToSpotify()
                        }
                    }
                    Section(header: Text("Health")) {
                        Button("Request HealthKit Access") {
                            requestHealthKitAccess()
                        }
                    }
                }
            }
            .navigationBarTitle("Settings")
            .listStyle(GroupedListStyle())
        }
    }
}

func connectToSpotify() {
    print("Not Implemented")
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
