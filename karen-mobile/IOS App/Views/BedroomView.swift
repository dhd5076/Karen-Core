//
//  BedroomView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/6/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct BedroomView: View {
    @State private var showLightingView = false
    @State private var lightButtonScale: CGFloat = 1
    private let hapticFeedback = UINotificationFeedbackGenerator()
    
    var body: some View {
        VStack {
            LightButton()
                .onTapGesture() {
                    self.lightButtonScale += 0.1
                }
                .onLongPressGesture(minimumDuration: 0.2) {
                        self.showLightingView = true
                    self.hapticFeedback.notificationOccurred(.success)
                    }
                .sheet(isPresented: $showLightingView) {
                    LightingView()
                }
            List {
                NavigationLink(destination: ItemListView(navTitle: "Wardrobe")) {
                    HStack {
                        Text("👕")
                        Text("Wardrobe")
                    }
                }
            }
        }
        .navigationBarTitle("Bedroom")
        .padding()
    }
}

struct BedroomView_Previews: PreviewProvider {
    static var previews: some View {
        BedroomView()
    }
}
