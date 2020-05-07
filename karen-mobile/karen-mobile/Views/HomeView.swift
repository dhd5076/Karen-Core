//
//  LightingVIew.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 4/19/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        VStack {
            Circle()
                .stroke(lineWidth: 5)
                .frame(width:128, height: 128)
                .overlay(Text("72°F").font(.title))
                .padding(12)
            List {
                Section(header: Text("Rooms")) {
                    NavigationLink(destination: BedroomView()) {
                        HStack {
                            Text("🛏️")
                            Text("Bedroom")
                        }
                    }
                    NavigationLink(destination: KitchenView()) {
                        HStack {
                            Text("🍴")
                            Text("Kitchen")
                        }
                    }
                    NavigationLink(destination: BathroomView()) {
                        HStack {
                            Text("🚿")
                            Text("Bathroom")
                        }
                    }
                    NavigationLink(destination: HomeView()) {
                        HStack {
                            Text("🚘")
                            Text("Garage")
                        }
                    }
                }
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .navigationBarTitle("Home")
        .listStyle(GroupedListStyle())
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
