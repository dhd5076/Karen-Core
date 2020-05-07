//
//  LightingView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/7/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct LightingView: View {
    @State public var redValue: Float = 100.0
    @State public var greenValue: Float = 100.0
    @State public var blueValue: Float = 100.0
    
    var body: some View {
        NavigationView {
            VStack {
                Spacer()
                HStack {
                    LightButton()
                }
                Spacer()
                ColorSlider(percentage: redValue, color: Color.red)
                ColorSlider(percentage: greenValue, color: Color.green)
                ColorSlider(percentage: blueValue, color: Color.blue)
            }
            .padding()
            .navigationBarTitle("Bedroom Light")
        }
    }
}

func turnLightOff() {
    
}

struct LightButton : View {
    var body : some View {
        ZStack {
            Rectangle()
                .frame(width: 128, height: 128)
                .cornerRadius(12)
                .foregroundColor(.gray)
            Image(systemName: "lightbulb.slash")
                .resizable()
                .accentColor(.black)
                .frame(width: 40, height: 55)
        }
    }
}

struct ColorSlider: View {
    @State public var percentage : Float
    @State public var color : Color
    
    var body: some View  {
        GeometryReader { geometry in
            // TODO: - there might be a need for horizontal and vertical alignments
            ZStack(alignment: .leading) {
                Rectangle()
                    .foregroundColor(.gray)
                Rectangle()
                    .foregroundColor(.accentColor)
                    .frame(width: geometry.size.width * CGFloat(self.percentage / 100))
            }
            .cornerRadius(12)
            .accentColor(self.color)
            .gesture(DragGesture(minimumDistance: 0)
                .onChanged({ value in
                    // TODO: - maybe use other logic here
                    self.percentage = min(max(0, Float(value.location.x / geometry.size.width * 100)), 100)
                }))
        }
        .frame(maxHeight: 100)
    }
}

struct LightingView_Previews: PreviewProvider {
    static var previews: some View {
        LightingView()
    }
}
